import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';

import { Popper, PopperMenuHeader, PopperMenuItem } from '~/components';

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

  const handleBack = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };

  const renderResult = (attrs) => (
    <div className="menu-items" tabIndex="-1" {...attrs}>
      <Popper className="menu-popper">
        {history.length > 1 && (
          <PopperMenuHeader title={current.title} onBack={handleBack} />
        )}
        <div className="menu-body">{renderItems()}</div>
      </Popper>
    </div>
  );

  // Reset menu to first page
  const handleResetMenu = () => {
    setHistory((prev) => prev.slice(0, 1));
  };

  return (
    <Wrapper>
      <Tippy
        interactive={true}
        delay={[0, 500]}
        offset={[12, 8]}
        placement="bottom-end"
        hideOnClick={hideOnClick}
        render={renderResult}
        onHide={handleResetMenu}
      >
        {children}
      </Tippy>
    </Wrapper>
  );
};

PopperMenu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  onChange: PropTypes.func,
  hideOnClick: PropTypes.bool,
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
