import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { Screen } from '@serenity/components';

import { useScrollToTop } from '@react-navigation/native';
import { NetNotify } from 'components/NetNotify';
import { RecentContainer } from '../History/RecentView';
import { MostPlayed } from '../MostPlayed/MostPlayedView';
import { ShortCutContainer } from './components/ShortcutContainer';
import QuoteCard from './components/QuoteCard';
import OnlineSongsContainer from '../components/OnlineSongsContainer';

const Divider = () => <View style={{ marginVertical: 8 }} />;

export const MainScreen = () => {
  const ref = React.useRef();
  useScrollToTop(ref);


  return (
    <Screen>
      <ScrollView ref={ref}>
        <NetNotify />
        <ShortCutContainer />
        <QuoteCard />
        <Divider />
        <RecentContainer />
        <Divider />
        <MostPlayed />
        <Divider />
        <OnlineSongsContainer />
      </ScrollView>
    </Screen>
  );
};
