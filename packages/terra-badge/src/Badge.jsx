import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './Badge.scss';

const cx = classNames.bind(styles);

const BadgeIntents = {
  DEFAULT: 'default',
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  INFO: 'info',
  WARNING: 'warning',
  POSITIVE: 'positive',
  NEGATIVE: 'negative',
};

const BadgeSizes = {
  TINY: 'tiny',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  HUGE: 'huge',
};

const propTypes = {
  /**
   * Child Nodes.
   */
  children: PropTypes.node,
  /**
   * An optional icon. Nested inline with the text when provided.
   */
  icon: PropTypes.element,
  /**
   * Sets the badge color scheme. One of `Badge.Opts.Intents.DEFAULT`, `Badge.Opts.Intents.PRIMARY`, `Badge.Opts.Intents.SECONDARY`, `Badge.Opts.Intents.POSITIVE`, `Badge.Opts.Intents.NEGATIVE`, `Badge.Opts.Intents.WARNING`, `Badge.Opts.Intents.INFO`.
   */
  intent: PropTypes.oneOf(Object.values(BadgeIntents)),
  /**
   * Reverses the position of the icon and text.
   */
  isReversed: PropTypes.bool,
  /**
   * Sets the badge size. One of `Badge.Opts.Sizes.TINY`, `Badge.Opts.Sizes.SMALL`, `Badge.Opts.Sizes.MEDIUM`, `Badge.Opts.Sizes.LARGE`, `Badge.Opts.Sizes.HUGE`.
   */
  size: PropTypes.oneOf(Object.values(BadgeSizes)),
  /**
   * Sets the badge text.
   */
  text: PropTypes.string,
};

const defaultProps = {
  children: null,
  icon: null,
  intent: 'default',
  isReversed: false,
  size: 'small',
  text: null,
};

const Badge = ({
  size,
  intent,
  isReversed,
  text,
  icon,
  ...customProps
}) => {
  const badgeClassNames = cx(
      'badge',
      size,
      intent,
      customProps.className);

  const textContent = text ? <span className={styles.text}>{text}</span> : null;
  const content = isReversed ? [textContent, icon, customProps.children] : [icon, textContent, customProps.children];
  return React.createElement('span', { ...customProps, className: badgeClassNames }, ...content);
};

const opts = {
  Intents: BadgeIntents,
  Sizes: BadgeSizes,
};

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;
Badge.Opts = opts;

export default Badge;
