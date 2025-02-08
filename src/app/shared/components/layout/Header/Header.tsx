'use client';
import s from './Header.module.scss';
import { Container } from '@/app/shared/components/Container/Container';
import { Logo } from '@/app/shared/icons/Logo';
import { WishList } from '@/app/shared/icons/WishList';
import { Cart } from '@/app/shared/icons/Cart';
import cn from 'classnames';
import { useState } from 'react';
import { Search } from '@/app/shared/icons/Search';
import { useBasketStore } from '@/app/core/providers/basketProvider';

const Header = () => {
  const [isActiveInput, setIsActiveInput] = useState<boolean>(false);
  const setUsername = useBasketStore(store => store.setUsername);
  const username = useBasketStore(store => store.username);
  const logout = useBasketStore(store => store.logout);

  const handleLogin = () => {
    const newUsername = prompt('Введите ваш никнейм:');
    if (newUsername) {
      setUsername(newUsername);
    }
  };

  const handleLogout = () => {
    const isConfirmed = confirm('Вы точно хотите выйти?'); // ✅ Добавил подтверждение выхода
    if (isConfirmed) {
      logout();
    }
  };

  return (
    <header className={s.header}>
      <Container>
        <div className={s.header__content}>
          <Logo color="black" />
          <div className={s.search}>
            <div className={s.search__wrapper}>
              <Search className={cn(s.search__icon, isActiveInput && s.search__icon_active)} />
              <input
                onFocus={() => setIsActiveInput(true)}
                onBlur={() => setIsActiveInput(false)}
                type="text"
                className={s.search__input}
                placeholder={'Search'}
              />
            </div>
          </div>
          {!username ? (
          <button onClick={handleLogin} className={s.loginBtn}>
            Login
          </button>
           ) : (
            <span className={s.username} onClick={handleLogout} style={{ cursor: 'pointer'}}>
            {username}
          </span>
             )}
          <div className={s.buttons}>
            <div className={s.buttons__item}>
              <button className={s.buttons__btn}>
                <WishList className={s.buttons__WishList} />
              </button>
            </div>
            <div className={s.buttons__item}>
              <button className={cn(s.buttons__btn, s.btn_cart)}>
                <Cart className={s.buttons__Cart} />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
