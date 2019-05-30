<?php

namespace App\Serializer;

use Symfony\Component\Form\FormError;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Translation\TranslatorInterface;

class FormErrorSerializer
{
    /** @var TranslatorInterface  */
    private $translator;

    /**
     * @param TranslatorInterface $translator
     */
    public function __construct(TranslatorInterface $translator)
    {
        $this->translator = $translator;
    }

    /**
     * @param FormInterface $data
     * @return array
     */
    public function convertFormToArray(FormInterface $data)
    {
        $form = $errors = [];

        foreach ($data->getErrors() as $error) {
            $errors[] = $this->getErrorMessage($error);
        }

        if ($errors) {
            $form['errors'] = $errors;
        }

        $children = [];
        foreach ($data->all() as $child) {
            if ($child instanceof FormInterface) {
                $children[$child->getName()] = $this->convertFormToArray($child);
            }
        }

        if ($children) {
            $form['children'] = $children;
        }

        return $form;
    }

    /**
     * @param FormError $error
     * @return string
     */
    private function getErrorMessage(FormError $error)
    {
        if (null !== $error->getMessagePluralization()) {
            return $this->translator->transChoice(
                $error->getMessageTemplate(),
                $error->getMessagePluralization(),
                $error->getMessageParameters(),
                'validators'
            );
        }

        return $this->translator->trans($error->getMessageTemplate(), $error->getMessageParameters(), 'validators');
    }
}
