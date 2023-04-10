-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema workoutdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `workoutdb` ;

-- -----------------------------------------------------
-- Schema workoutdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `workoutdb` DEFAULT CHARACTER SET utf8 ;
USE `workoutdb` ;

-- -----------------------------------------------------
-- Table `workout`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `workout` ;

CREATE TABLE IF NOT EXISTS `workout` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `muscle_group` VARCHAR(45) NULL,
  `day` DATETIME NULL,
  `weight` INT NOT NULL,
  `reps` INT NULL,
  `name` VARCHAR(45) NOT NULL,
  `rpe` INT NULL,
  `sets` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8;

SET SQL_MODE = '';
DROP USER IF EXISTS sebi@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'sebi'@'localhost' IDENTIFIED BY 'sebi';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'sebi'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `workout`
-- -----------------------------------------------------
START TRANSACTION;
USE `workoutdb`;
INSERT INTO `workout` (`id`, `muscle_group`, `day`, `weight`, `reps`, `name`, `rpe`, `sets`) VALUES (1, 'Chest', '2023-03-17', 250, 5, 'Bench Press', 9, 2);
INSERT INTO `workout` (`id`, `muscle_group`, `day`, `weight`, `reps`, `name`, `rpe`, `sets`) VALUES (2, 'Back', '2023-03-18', 315, 10, 'Deadlift', 9, 3);
INSERT INTO `workout` (`id`, `muscle_group`, `day`, `weight`, `reps`, `name`, `rpe`, `sets`) VALUES (3, 'Bicep', '2023-03-18', 100, 12, 'Curl', 7, 4);
INSERT INTO `workout` (`id`, `muscle_group`, `day`, `weight`, `reps`, `name`, `rpe`, `sets`) VALUES (4, 'Tricep', '2023-03-17', 30, 12, 'Single Arm Extension', 7, 3);
INSERT INTO `workout` (`id`, `muscle_group`, `day`, `weight`, `reps`, `name`, `rpe`, `sets`) VALUES (5, 'Abdominal', '2023-03-18', 0, 20, 'Crunch', 6, 4);
INSERT INTO `workout` (`id`, `muscle_group`, `day`, `weight`, `reps`, `name`, `rpe`, `sets`) VALUES (6, 'Back', '2023-03-22', 130, 12, 'Lat Pulldown', 7, 3);
INSERT INTO `workout` (`id`, `muscle_group`, `day`, `weight`, `reps`, `name`, `rpe`, `sets`) VALUES (7, 'Back', '2023-03-22', 150, 10, 'Bent Over Row', 8, 3);
INSERT INTO `workout` (`id`, `muscle_group`, `day`, `weight`, `reps`, `name`, `rpe`, `sets`) VALUES (8, 'Bicep', '2023-03-22', 150, 10, 'Preacher Curl', 8, 3);
INSERT INTO `workout` (`id`, `muscle_group`, `day`, `weight`, `reps`, `name`, `rpe`, `sets`) VALUES (9, 'Bicep', '2023-03-22', 30, 12, 'Hammer Curl', 8, 3);
INSERT INTO `workout` (`id`, `muscle_group`, `day`, `weight`, `reps`, `name`, `rpe`, `sets`) VALUES (10, 'Legs', '2023-03-24', 315, 8, 'Squat', 8, 4);
INSERT INTO `workout` (`id`, `muscle_group`, `day`, `weight`, `reps`, `name`, `rpe`, `sets`) VALUES (11, 'Legs', '2023-03-24', 120, 4, 'Bulgarian Split Squat', 9, 4);
INSERT INTO `workout` (`id`, `muscle_group`, `day`, `weight`, `reps`, `name`, `rpe`, `sets`) VALUES (12, 'Abdominal', '2023-03-24', 0, 4, 'Crunch', 6, 4);

COMMIT;

