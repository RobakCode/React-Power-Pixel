import styled from "@emotion/styled";
// import { css } from "@emotion/react";
import tw from "twin.macro";

type TextProps = {
  variant?: string;
  color?: string;
};

export const TextH1 = styled.h1<TextProps>(({ variant }) => [
  tw`font-roboto`,

  !variant && tw`font-light text-4xl text-tail-main`,
]);

export const TextH2 = styled.h3<TextProps>(({ variant, color }) => [
  tw`font-roboto`,

  !color && tw`text-tail-main`,

  !variant && tw`font-light text-xl`,
]);

export const TextH3 = styled.h3<TextProps>(({ variant, color }) => [
  tw`font-roboto`,

  !color && tw`text-tail-second`,

  !variant && tw`font-medium text-sm uppercase`,
]);

export const TextPercent = styled.span<TextProps>(({ variant }) => [
  tw`flex items-center font-roboto font-normal text-sm`,

  variant === "down" && tw`text-error`,

  !variant && tw`text-success`,
]);

export const TextTitle = styled.p<TextProps>(({ variant }) => [
  tw`font-roboto text-2xl text-tail-main`,

  !variant && tw`font-bold`,
]);

export const TextLead = styled.p<TextProps>(({ variant }) => [
  tw`font-roboto text-xs text-tail-second`,

  !variant && tw`font-normal`,
]);
