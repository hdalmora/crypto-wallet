import { ReactNode } from 'react';
import LinkButton from '../LinkButton';
import * as S from './styles';

interface NavigationProps {
  children: ReactNode;
}

const Navigation: React.FC<NavigationProps> = ({
  children,
}: NavigationProps) => {
  return (
    <S.Container>
      <aside>
        <nav>
          <span>
            <strong>crypto</strong>Wallet
          </span>

          <ul>
            <li>
              <LinkButton label='Wallet' to='wallet' />
            </li>

            <li>
              <LinkButton label='Summary' to='summary' />
            </li>
          </ul>
        </nav>
      </aside>

      <main>{children}</main>
    </S.Container>
  );
};

export default Navigation;
