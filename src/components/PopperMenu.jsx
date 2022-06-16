import { useState } from 'react';
import styled from 'styled-components';
import Tippy from '@tippyjs/react/headless';

import { Popper, PopperMenuItem, PopperMenuHeader } from '~/components';

const defFunc = () => {};

const PopperMenu = ({
  children,
  items = [],
  onChange = defFunc,
  hideOnClick = false,
}) => {
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
        delay={[0, 500]}
        offset={[12, 8]}
        placement="bottom-end"
        hideOnClick={hideOnClick}
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
              <div className="menu-body">{renderItems()}</div>
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

  .menu-body {
    overflow-y: auto;
  }

  .menu-popper {
    padding-bottom: 8px;
  }
`;

export default PopperMenu;
