<?php

declare(strict_types=1);

namespace App\Service;

use App\Constants\BaseConstants;
use App\Entity\Company;
use App\Entity\User;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\ORMException;
use Swift_Mailer;
use Swift_Message;
use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

class UserRegisterByEmail
{
    private const RANDOM_TOKEN_BYTE_SIZE = 20;
    private const ACTIVATION = 'Hobby | Account activation';
    private const PRD_VALIDATION_LINK = 'http://hobby.projektai.nfqakademija.lt/register/';
    private const DEV_EMAIL = 'Enter your email here';
    private const DEV_VALIDATION_LINK = 'Enter your address here';

    /** @var string */
    private $env;

    /** @var EntityManager */
    private $em;

    /** @var Swift_Mailer */
    private $mailer;

    /** @var Environment */
    private $templating;

    public function __construct(
        string $env,
        EntityManager $em,
        Swift_Mailer $mailer,
        Environment $templating
    ) {
        $this->env = $env;
        $this->em = $em;
        $this->mailer = $mailer;
        $this->templating = $templating;
    }

    /**
     * @param User $user
     * @param User $companyAdministrator
     * @throws LoaderError
     * @throws ORMException
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function sendRegistrationToEmail(User $user, User $companyAdministrator): void
    {
        $sendData = $this->checkEnvironment($user, $companyAdministrator->getCompany());

        $renderTemplate = $this->templating->render(
            'email/registration.html.twig',
            [
                'authenticationLink' => $sendData['authenticationLink']
            ]
        );

        $message = new Swift_Message();

        $message
            ->setSubject(self::ACTIVATION)
            ->setFrom(BaseConstants::MAILER_FROM)
            ->setTo($sendData['sentTo'])
            ->setBody(
                $renderTemplate,
                "text/html"
            );

        $this->mailer->send($message);
    }

    /**
     * @param User $user
     * @param Company $company
     * @return array
     * @throws ORMException
     */
    private function checkEnvironment(User $user, Company $company): array
    {
        if (BaseConstants::PRD_ENVIRONMENT === $this->env) {
            $sentTo = $user->getEmail();
            $authenticationLink = self::PRD_VALIDATION_LINK . $this->createUserRegistrationToken($user, $company);
        } else {
            $sentTo = self::DEV_EMAIL;
            $authenticationLink = self::DEV_VALIDATION_LINK . $this->createUserRegistrationToken($user, $company);
        }

        return ['sentTo' => $sentTo, 'authenticationLink' => $authenticationLink];
    }

    /**
     * @param User $user
     * @param Company $company
     * @return string
     * @throws ORMException
     */
    private function createUserRegistrationToken(User $user, Company $company): string
    {
        try {
            $randomBytes = random_bytes(self::RANDOM_TOKEN_BYTE_SIZE);
            $randomToken = bin2hex($randomBytes);

            $user->setCompany($company);
            $user->setRegistrationToken($randomToken);

            $this->em->flush();

            return $randomToken;
        } catch (\Throwable $exception) {
            if ($exception instanceof ORMException) {
                throw new ORMException($exception);
            }

            throw new $exception;
        }
    }
}
