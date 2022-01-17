import React from "react";
import * as Styled from "./WhyUs.styled";

const WhyUs = () => {
  return (
    <Styled.Container>
      <Styled.Heading>Why Us</Styled.Heading>
      <Styled.TilesContainer>
        <Styled.Tile>
          <Styled.TileHeading>
            Get More <div>Visibility</div>
          </Styled.TileHeading>
          <Styled.TileDetails>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit...
          </Styled.TileDetails>
        </Styled.Tile>
        <Styled.Tile>
          <Styled.TileHeading>
            Organize Your <div>Candidated</div>
          </Styled.TileHeading>
          <Styled.TileDetails>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit...
          </Styled.TileDetails>
        </Styled.Tile>
        <Styled.Tile>
          <Styled.TileHeading>
            Verify Their <div>Abilities</div>
          </Styled.TileHeading>
          <Styled.TileDetails>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit...
          </Styled.TileDetails>
        </Styled.Tile>
      </Styled.TilesContainer>
    </Styled.Container>
  );
};

export default WhyUs;
