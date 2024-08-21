# NextJS, NextAuth, and Login.gov Minimum Reproducible Configuration

This repository provides a minimum reproducible configuration for NextJS, NextAuth, and Login.gov. It includes a custom `Login.gov` provider in `auth.ts` that can be used to authenticate users with the Login.gov service.

## Purpose

The purpose of this repository is to provide a simple way to test the integration of NextJS, NextAuth, and Login.gov. It includes a custom `Login.gov` provider that can be used to authenticate users with the Login.gov service.

## Configuration

You can find more information about the configuration settings needed for the custom `Login.gov` provider in the `auth.ts` file.

You'll need to configure a NextAuth secret using `npx auth secret` per the AuthJS instructions, then create a Login.gov app using the OICD PKCE setting to get the AUTH_CLIENT_ID environment variable which should be specified in env.local.
