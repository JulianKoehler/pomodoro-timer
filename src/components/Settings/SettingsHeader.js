import styled from "styled-components";
import closeIcon from "../../assets/images/icon-close.svg";

const SettingsHeader = props => {
  return (
    <Head>
      <h2>Settings</h2>
      <CloseBtn
        onClick={props.closeModal}
        image={closeIcon}></CloseBtn>
    </Head>
  );
};

export default SettingsHeader;

const Head = styled.div`
  padding: 0.5em var(--modal-padding) 0.5em;
  border-bottom: 1px solid var(--border-bottom);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  width: 2.5em;
  height: 2.5em;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: 40%;
  background-position: center;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.35s;

  &:hover {
    background-color: var(--washed-out-white);
  }
`;
