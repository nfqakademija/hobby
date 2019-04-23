<?php

declare(strict_types=1);

namespace App\Form\Type;

use App\Entity\Hobby;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class HobbyType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title')
            ->add('description')
            ->add('amount')
            ->add('email')
            ->add('username')
            ->add('endDate', DateTimeType::class, [
//                'placeholder' => '',
                'widget' => 'single_text',
                'required' => true,
                'inherit_data' => true,
            ])
//            ->add('datePicture', 'datetime', array(
//                'description' => 'The date when the picture was taken',
//                'widget' => 'single_text',
//                'date-format' => 'yyyy/MM/dd',
//            ))
            ->add('save', SubmitType::class);
    }

    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => Hobby::class,
            'csrf_protection' => false
        ));
    }
}
