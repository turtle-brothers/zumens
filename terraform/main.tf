terraform {
  required_version = "1.4.6"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.4.0"
    }
    random = {
      source  = "hashicorp/random"
      version = ">=3.0"
    }
  }
}

# ---------------------------------------------
# Provider
# ---------------------------------------------
provider "aws" {
  profile = "terraform"
  region  = "ap-northeast-1"
}

provider "aws" {
  alias   = "virginia"
  profile = "terraform"
  region  = "us-east-1"
}

# ---------------------------------------------
# Variables
# ---------------------------------------------
variable "project" {
  type = string
}

variable "environment" {
  type = string
}

variable "domain" {
  type = string
}
