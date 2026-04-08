-- AlterTable
ALTER TABLE `Leaderboard` MODIFY `period` VARCHAR(191) NULL,
    MODIFY `wins` INTEGER NULL,
    MODIFY `rank` INTEGER NULL;

-- AlterTable
ALTER TABLE `Match` MODIFY `state` LONGTEXT NULL;

-- AlterTable
ALTER TABLE `Report` MODIFY `description` TEXT NULL;

-- AlterTable
ALTER TABLE `User` MODIFY `name` VARCHAR(191) NULL;
