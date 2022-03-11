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

export const TextH3 = styled.h3<TextProps>(({ variant, color }) => [
  tw`font-roboto`,

  !color && tw`text-tail-second`,

  !variant && tw`font-medium text-sm uppercase`,
]);
