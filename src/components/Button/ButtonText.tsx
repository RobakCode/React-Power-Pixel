import styled from "@emotion/styled";
// import { css } from "@emotion/react";
import tw from "twin.macro";

type ButtonProps = {
  variant?: string;
  color?: string;
};

export const ButtonText = styled.a<ButtonProps>(({ variant }) => [
  tw`font-roboto cursor-pointer`,
  !variant && tw`text-sm font-normal text-error`,
]);
