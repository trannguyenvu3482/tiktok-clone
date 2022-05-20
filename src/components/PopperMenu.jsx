import React from 'react';
import styled from 'styled-components';
import Tippy from '@tippyjs/react/headless';
import { Popper, PopperMenuItem } from '~/components';
const PopperMenu = ({ children, items = [] }) => {
  const renderItems = () => {
    return items.map((item, index) => {
      return <PopperMenuItem key={index} data={item} />;
    });
  };
  return (
    <Wrapper>
      <Tippy
        interactive={true}
        delay={[0, 700]}
        placement="bottom-end"
        render={(attrs) => (
          <div className="menu-items" tabIndex="-1" {...attrs}>
            <Popper className="menu-popper">{renderItems()}</Popper>
          </div>
        )}
      >
        {children}
      </Tippy>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  // Menu items
  .menu-items {
    width: 224px;
  }
`;

export default PopperMenu;
