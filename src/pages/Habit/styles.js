import styled from "styled-components";
import backgroundHabit from "../../images/habit.svg";

export const Container = styled.div`
  background-color: var(--gray);
  min-height: 100vh;
  background-image: url(${backgroundHabit});
  background-position: center;
  background-repeat: no-repeat;
`;
