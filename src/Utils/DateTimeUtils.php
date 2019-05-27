<?php

declare(strict_types=1);

namespace App\Utils;

final class DateTimeUtils
{
    /**
     * @param string $time
     * @param \DateTimeZone|null $timezone
     * @return \DateTime
     * @throws \Exception
     */
    public static function create(string $time = 'now', \DateTimeZone $timezone = null): \DateTime
    {
        return new \DateTime($time, $timezone ?? new \DateTimeZone('UTC'));
    }
}
