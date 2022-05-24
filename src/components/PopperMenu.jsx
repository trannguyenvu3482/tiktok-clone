import { useState } from 'react';
import styled from 'styled-components';
import Tippy from '@tippyjs/react/headless';

import { Popper, PopperMenuItem, PopperMenuHeader } from '~/components';

const defFunc = () => {};

const PopperMenu = ({ children, items = [], onChange = defFunc }) => {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;

      return (
        <PopperMenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
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
            <Popper className="menu-popper">
              {history.length > 1 && (
                <PopperMenuHeader
                  title="Language"
                  onBack={() => {
                    setHistory((prev) => prev.slice(0, prev.length - 1));
                  }}
                />
              )}
              {renderItems()}
            </Popper>
          </div>
        )}
        onHide={() => {
          setHistory((prev) => prev.slice(0, 1));
        }}
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
