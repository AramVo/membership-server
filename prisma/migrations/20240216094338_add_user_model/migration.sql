-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Admin', 'SuperAdmin', 'Customer', 'Trainer');

-- CreateEnum
CREATE TYPE "UserStatusEnum" AS ENUM ('Active', 'Pending');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstName" VARCHAR(255) NOT NULL,
    "lastName" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "role" "Role" NOT NULL,
    "phone" VARCHAR(255) NOT NULL,
    "status" "UserStatusEnum" NOT NULL DEFAULT 'Pending',
    "deletedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
