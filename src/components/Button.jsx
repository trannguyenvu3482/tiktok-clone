import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = ({
  to,
  href,
  onClick,
  outline = false,
  primary = false,
  small = false,
  large = false,
  text = false,
  disabled = false,
  rounded = false,
  thin = false,
  leftIcon,
  rightIcon,
  className,
  children,
  ...passprops
}) => {
  let Comp = 'button';
  const classes =
    'wrapper' +
    (primary ? ' primary' : '') +
    (outline ? ' outline' : '') +
    (small ? ' small' : '') +
    (large ? ' large' : '') +
    (text ? ' text' : '') +
    (disabled ? ' disabled' : '') +
    (rounded ? ' rounded' : '') +
    (className ? ` ${className}` : '') +
    (thin ? ' thin' : '');
  const props = {
    onClick,
    passprops,
  };

  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  return (
    <Wrapper className="wrap">
      <Comp className={classes} onClick={onClick} {...props}>
        {leftIcon && <span className="icon">{leftIcon}</span>}
        <span className="title">{children}</span>
        {rightIcon && <span className="icon">{rightIcon}</span>}
      </Comp>
    </Wrapper>
  );
};

Button.propTypes = {
  children: propTypes.node.isRequired,
};

const Wrapper = styled.div`
  + .wrap {
    margin-left: 16px;
  }
  .wrapper {
    font-family: 'ProximaNova', sans-serif;
    min-width: 100px;
    padding: 9px 16px;
    border-radius: 4px;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    font-size: 1.6rem;
    font-weight: 700;
    cursor: pointer;
    background-color: #fff;
    border: 1px solid transparent;
    user-select: none;

    &.disabled {
      cursor: not-allowed;
      pointer-events: none;
      opacity: 0.5;
    }
  }
  .rounded {
    border-radius: 999px;
    color: #333;
    background-color: #fff;
    box-shadow: 0 2px 8px rgb(0 0 0 / 6%);
    border-color: rgba(22, 24, 35, 0.12);

    :hover {
      border-color: rgba(22, 24, 35, 0.2);
      background-color: rgba(22, 24, 35, 0.01);
    }
  }

  .primary {
    background-color: #fe2c55;
    color: #fff;
    font-weight: 600;
    border-color: #fe2c55;

    :hover {
      background: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.06),
          rgba(0, 0, 0, 0.06)
        ),
        #fe2c55;
      border-color: #fe2c55;
    }
  }
  .outline {
    color: #fe2c55;
    border-color: currentColor;

    :hover {
      border-color: currentColor;
      background-color: rgba(254, 44, 85, 0.06);
    }
  }
  .thin {
    font-weight: 600;
    border-radius: 2px;
    border: 1px solid rgba(22, 24, 35, 0.12);

    :hover {
      background-color: rgba(22, 24, 35, 0.03);
    }
  }

  .small {
    min-width: 88px;
    padding: 4px 16px;
  }
  .large {
    min-width: 140px;
    padding: 14px 16px;
  }
  .text {
    :hover {
      text-decoration: underline;
    }
  }

  // Icon
  .icon {
    display: inline-flex;
    width: 16px;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
  .icon + .title,
  .title + .icon {
    margin-left: 8px;
  }
`;

export default Button;
