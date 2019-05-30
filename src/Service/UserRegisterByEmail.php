<?php

declare(strict_types=1);

namespace App\Service;

use App\Entity\User;
use Doctrine\ORM\EntityManager;
use Twig\Environment;

class UserRegisterByEmail
{
    private const ACTIVATION = 'Account activation';
    private const MAILER_FROM = 'support@hobby.nfqproject.lt';
    private const PRD_ENVIRONMENT = 'prd';
    private const PRD_VALIDATION_LINK = 'http://hobby.projektai.nfqakademija.lt/register/';
    private const DEV_EMAIL = 'Enter your email here';
    private const DEV_VALIDATION_LINK = 'Enter your address here';

    /** @var string */
    private $env;

    /** @var EntityManager */
    private $em;

    /** @var \Swift_Mailer */
    private $mailer;

    /** @var Environment */
    private $templating;

    public function __construct(
        string $env,
        EntityManager $em,
        \Swift_Mailer $mailer,
        Environment $templating
    ) {
        $this->env = $env;
        $this->em = $em;
        $this->mailer = $mailer;
        $this->templating = $templating;
    }

    /**
     * @param User $user
     * @throws \Throwable
     */
    public function sendRegistrationToEmail(User $user): void
    {
        $sendData = $this->checkEnvironment($user);

        $renderTemplate = $this->templating->render(
            'email/registration.html.twig',
            [
                'authenticationLink' => $sendData['authenticationLink']
            ]
        );

        $message = new \Swift_Message();

        $message
            ->setSubject(self::ACTIVATION)
            ->setFrom(self::MAILER_FROM)
            ->setTo($sendData['sentTo'])
            ->setBody(
                $renderTemplate,
                "text/html"
            );

        $this->mailer->send($message);
    }

    /**
     * @param User $user
     * @return string
     * @throws \Exception
     */
    private function createUserRegistrationToken(User $user): string
    {
        $randomBytes = random_bytes(20);
        $randomToken = bin2hex($randomBytes);

        $user->setRegistrationToken($randomToken);

        $this->em->flush();

        return $randomToken;
    }

    /**'
     * @param User $user
     * @return array
     * @throws \Exception
     */
    private function checkEnvironment(User $user): array
    {
        if (self::PRD_ENVIRONMENT === $this->env) {
            $sentTo = $user->getEmail();
            $authenticationLink = self::PRD_VALIDATION_LINK . $this->createUserRegistrationToken($user);
        } else {
            $sentTo = self::DEV_EMAIL;
            $authenticationLink = self::DEV_VALIDATION_LINK . $this->createUserRegistrationToken($user);
        }

        return ['sentTo' => $sentTo, 'authenticationLink' => $authenticationLink];
    }
}
