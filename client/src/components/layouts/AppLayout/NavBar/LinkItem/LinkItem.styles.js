import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { motion } from 'motion/react';
import { gradients, sizes, utils } from '@/styles/abstracts';

export const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  gap: ${sizes.spacing.xs};
  align-items: center;
  position: relative;
  font-weight: ${(props) => (props.active ? 500 : 'normal')};
`;

export const StyledIndicator = styled(motion.div)`
  position: absolute;
  top: calc(0rem - ${sizes.spacing.md});
  width: 120%;
  height: ${utils.rem(4)};
  ${gradients.bgLinearGradient()}
  border-radius: 0 0 1rem 1rem;
`;
