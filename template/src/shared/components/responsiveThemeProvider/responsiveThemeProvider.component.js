import React, { PureComponent, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import responsiveTheme from '../../../theme/responsiveTheme';
import { WindowListener } from '../windowListener/windowListener.component';

const parseTheme = theme => responsiveTheme(theme);

export class ResponsiveThemeProvider extends PureComponent {
  static propTypes = {
    theme: PropTypes.object,
    children: PropTypes.any,
  };

  state = {
    theme: parseTheme(this.props.theme),
  };

  static getDerivedStateFromProps({ theme }) {
    return { theme: parseTheme(theme) };
  }

  handleResize = () => {
    this.setState({ theme: parseTheme(this.props.theme) });
  };

  render() {
    return (
      <Fragment>
        <WindowListener eventType="resize" throttle={200} onEvent={this.handleResize} />
        <ThemeProvider theme={this.state.theme}>{this.props.children}</ThemeProvider>
      </Fragment>
    );
  }
}
