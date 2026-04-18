import styled from "styled-components";

export function Header() {
  return (
    <StyledHeader>
      <h1>Stats converter for Pokémon Champions</h1>
      <p>Converts Champions "Stat Points" to Effort Values and vice-versa.</p>
		</StyledHeader>
	);
}

const StyledHeader = styled.header`
  text-align: center;
`;
