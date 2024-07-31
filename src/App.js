import React, { Fragment } from 'react';
import './App.css';
import Routers from './Routes';
import AnimationThemeProvider from './_helper/AnimationTheme/AnimationThemeProvider';
import CustomizerProvider from './_helper/customizer/CustomizerProvider';

function App() {
      return (
            <Fragment>
                  <CustomizerProvider>
                        <AnimationThemeProvider>                                                                                    <Routers />
                        </AnimationThemeProvider>
                  </CustomizerProvider>
            </Fragment >
      );
}
export default App;