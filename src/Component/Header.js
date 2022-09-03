import * as S from '../Styled/styleHeader.js';

const Header = () => {
  return (
    <S.Header>
      <S.NavHeader>
        <h2>ToDo</h2>
        <img
          className="deer"
          src="https://www.origamid.com/projetos/wildbeast/img/icones/cervo.svg"
          alt="deer"
          srcset=""
        />
      </S.NavHeader>
    </S.Header>
  );
};
export default Header;
