<?php

namespace App\Command;

use App\Entity\Company;
use App\Entity\User;
use App\Factory\Entity\CompanyFactory;
use App\Factory\Entity\UserFactory;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\ORM\ORMException;
use Symfony\Component\Config\Definition\Exception\Exception;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Validator\ConstraintViolation;
use Symfony\Component\Validator\ConstraintViolationListInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class CompanyCreateCommand extends Command
{
    protected static $defaultName = 'app:company:create';

    private const COMPANY_BUDGET = 0;
    private const ADMINISTRATOR_ROLE = 'ROLE_ADMIN';

    /** @var EntityManager */
    private $entityManager;

    /** @var UserPasswordEncoderInterface */
    private $encoder;

    /** @var ValidatorInterface */
    private $validator;

    /**
     * @param EntityManager $entityManager
     * @param UserPasswordEncoderInterface $encoder
     * @param ValidatorInterface $validator
     */
    public function __construct(EntityManager $entityManager, UserPasswordEncoderInterface $encoder, ValidatorInterface $validator)
    {
        $this->entityManager = $entityManager;
        $this->encoder = $encoder;
        $this->validator = $validator;

        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->setDescription('Command which create company with administrator')
            ->addArgument('userEmail', InputArgument::OPTIONAL, 'Administrator email')
            ->addArgument('companyName', InputArgument::OPTIONAL, 'Company name');
    }

    /**
     * @param InputInterface $input
     * @param OutputInterface $output
     * @throws ORMException
     * @throws OptimisticLockException
     */
    protected function execute(InputInterface $input, OutputInterface $output): void
    {
        $io = new SymfonyStyle($input, $output);
        $userEmail = $input->getArgument('userEmail');
        $companyName = $input->getArgument('companyName');

        if (null === $userEmail) {
            $io->note(sprintf('You passed an argument: user email'));

            return;
        }

        if (null === $companyName) {
            $io->note(sprintf('You passed an argument: company name'));

            return;
        }

        $randomBytes = random_bytes(3);
        $randomPassword = bin2hex($randomBytes);

        $company = $this->createCompany($companyName);
        $user = $this->createAdministrator($company, $userEmail, $randomPassword);

        $this->entityManager->persist($company);
        $this->entityManager->persist($user);
        $this->entityManager->flush();

        $io->success(
            'Company created. Company name: ' . $companyName .
            ', administrator: ' . $userEmail .
            ', password: ' . $randomPassword
        );
    }

    /**
     * @param string $companyName
     * @return Company|null
     * @throws ORMException
     */
    private function createCompany(string $companyName): ?Company
    {
        $company = CompanyFactory::create($companyName);

        $companyErrors = $this->validator->validate($company);
        $this->catchErrors($companyErrors);

        return $company;
    }

    /**
     * @param Company $company
     * @param string $userEmail
     * @param string $randomPassword
     * @return User
     */
    private function createAdministrator(Company $company, string $userEmail, string $randomPassword): User
    {
        $user = UserFactory::create(
            $this->encoder,
            $company,
            $userEmail,
            self::COMPANY_BUDGET,
            [self::ADMINISTRATOR_ROLE],
            $randomPassword
        );

        $userErrors = $this->validator->validate($user);
        $this->catchErrors($userErrors);

        return $user;
    }

    /**
     * @param ConstraintViolationListInterface $errors
     */
    private function catchErrors(ConstraintViolationListInterface $errors): void
    {
        if (count($errors) > 0) {
            /** @var ConstraintViolation $error */
            foreach ($errors as $error) {
                throw new Exception('Property: ' . $error->getPropertyPath() . '. ' . $error->getMessage());
            }
        }
    }
}
