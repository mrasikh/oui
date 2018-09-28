import React from 'react';
import { storiesOf } from '@storybook/react';

import ArrowsInline from '../src/components/ArrowsInline';
import Attention from '../src/components/Attention';
import Badge from '../src/components/Badge';
import BlockList from '../src/components/BlockList';
import Button from '../src/components/Button';
import Card from '../src/components/Card';
import EmptyDashboard from '../src/components/EmptyDashboard';
import Input from '../src/components/Input';
import Link from '../src/components/Link';
import ProgressBar from '../src/components/ProgressBar';
import ProgressDots from '../src/components/ProgressDots';
import RangeSlider from '../src/components/RangeSlider';
import SelectDropdown from '../src/components/SelectDropdown';
import Spinner from '../src/components/Spinner';
import Switch from '../src/components/Switch';
import TabNav from '../src/components/TabNav';
import Table from '../src/components/Table';
import Token from '../src/components/Token';

const stories = storiesOf('Hello.', module);
stories
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories
  .add('Component Overview', () => {
    return (<div>

      <TabNav activeTab="second" style={ ['dashboard'] }>
        <TabNav.Tab tabId="first">
          Tab #1
        </TabNav.Tab>
        <TabNav.Tab tabId="second">
          Tab #2
        </TabNav.Tab>
        <TabNav.Tab tabId="third">
          Tab #3
        </TabNav.Tab>
      </TabNav>

      <div className="push--ends">
        <ProgressDots />
        <Spinner />
      </div>

      <div className="push--bottom">
        <Attention type='brand'>Brand: This is a short attention bar.</Attention>
      </div>
      <div className="push--bottom">
        <Attention type='good-news'>Good News: This is a short attention bar.</Attention>
      </div>
      <div className="push--bottom">
        <Attention type='bad-news'>Bad News: This is a short attention bar.</Attention>
      </div>
      <div className="push--bottom">
        <Attention type='warning'>Warning: This is a short attention bar.</Attention>
      </div>


      <div class="push--ends">
         <h1>H1 Experiments</h1>
         <h2>H2 Experiments</h2>
         <h3>H3 Experiments</h3>
         <h4>H4 Experiments</h4>
         <h5>H5 Experiments</h5>
         <h6>H6 Experiments</h6>
      </div>

      <div class="oui--swatches push--ends">
         <span className="width--50 height--50 display--inline-block background--red"></span>
         <span className="width--50 height--50 display--inline-block background--gold"></span>
         <span className="width--50 height--50 display--inline-block background--indigo"></span>
         <span className="width--50 height--50 display--inline-block background--cyan"></span>
         <span className="width--50 height--50 display--inline-block background--green"></span>
         <span className="width--50 height--50 display--inline-block background--blue"></span>
         <span className="width--50 height--50 display--inline-block background--orange"></span>
         <span className="width--50 height--50 display--inline-block background--white-40b"></span>

      </div>

      <div className="push--ends">
        <Badge color="default">Default</Badge>
        <Badge color="draft">Draft</Badge>
        <Badge color="live">Live</Badge>
        <Badge color="primary">Primary</Badge>
        <Badge color="plain">Plain</Badge>
      </div>

      <BlockList hasBorder={ true }>
        <BlockList.Category>
          <BlockList.Item onClick={ true }>No click</BlockList.Item>
        </BlockList.Category>
        <BlockList.Category>
          <BlockList.Item href="https://www.optimizely.com/" hrefTarget="_blank">Open optimizely.com</BlockList.Item>
        </BlockList.Category>
        <BlockList.Category>
          <BlockList.Item onClick={ true }>
            <div className="flex flex-align--center">
              <div className="flex--1">
                <div>Complex Item</div>
                <div className="muted micro">This is the item description.</div>
              </div>
              <Button size="small" style="outline" width="default">Inner Button</Button>
            </div>
          </BlockList.Item>
        </BlockList.Category>
        <BlockList.Category>
          <BlockList.Item>Plain Text Example</BlockList.Item>
        </BlockList.Category>
      </BlockList>

      <div className="push--ends">
        <Token
          isDismissible={ true }
          name="Primary Token"
          style="primary"
        />
        <Token
          name="Secondary Token"
          style="secondary"
        />
      </div>

      <div className="push--ends flex">
        <Button key="1">Button</Button>
        <Button key="2" style="highlight">Highlight</Button>
        <Button key="3" style="danger">Danger</Button>
        <Button key="4" style="danger-outline">Danger Outline</Button>
        <Button key="5" style="outline">Outline</Button>
        <Button key="6" style="plain">Plain</Button>
        <Button key="7" style="toggle">Toggle</Button>

        <SelectDropdown items={[
    {label: 'Cat',description: 'A small feline.',value: 'cat'},
    {label: 'Dog',value: 'dog'},
    {label: 'Bear',description: 'Likes honey',value: 'bear'}]} value="dog" />

        <Switch checked={ false } />
        <Switch checked={ true } />
      </div>

      <div className="push--ends">
        <Input
          label="Field label"
          note="A short description or note about this field."
          placeholder="Just a placeholder"
          type="text"
        />
      </div>

      <div className="push--ends">
        <Input
          label="Field label error"
          displayError={ true }
          note="A short description or note about this field."
          placeholder="Just a placeholder"
          type="text"
        />
      </div>

      <div className="push--ends">
        <Link href="http://google.com">Link</Link>
        <Link href="http://google.com" style="dark">Dark Link</Link>
        <Link href="http://google.com" style="muted">Muted Link</Link>
        <Link href="http://google.com" style="bad-news">Bad News Link</Link>
        <span className="background--brand soft-half"><Link href="http://google.com" style="reverse">Reverse Text Link</Link></span>
      </div>

      <div className="push--ends">
        <ProgressBar
          max={100}
          min={0}
          progress={60}
          topLabel="Progress Bar of Hope..."
          leftLabel="None"
          rightLabel="Some"
        />
      </div>

      <div className="push--ends">
        <RangeSlider value={ 50 } />
      </div>

      <div className="push--ends">
        <Table density="loose" style="rule" tableLayoutAlgorithm="fixed">
          <Table.THead>
            <Table.TR>
              <Table.TH> Experiment </Table.TH>
              <Table.TH isNumerical={ true }> Conversion Rate </Table.TH>
              <Table.TH> Status </Table.TH>
            </Table.TR>
          </Table.THead>
          <Table.TBody>
            <Table.TR>
              <Table.TD> Header CTA </Table.TD>
              <Table.TD isNumerical={ true }> 12% </Table.TD>
              <Table.TD> Paused </Table.TD>
            </Table.TR>
            <Table.TR>
              <Table.TD> Shorter Contact Form </Table.TD>
              <Table.TD isNumerical={ true }> 4% </Table.TD>
              <Table.TD> Draft </Table.TD>
            </Table.TR>
            <Table.TR>
              <Table.TD> Larger search bar </Table.TD>
              <Table.TD isNumerical={ true }> 6.7% </Table.TD>
              <Table.TD> Paused </Table.TD>
            </Table.TR>
            <Table.TR>
              <Table.TD> Center aligned headline </Table.TD>
              <Table.TD isNumerical={ true }> 9.3% </Table.TD>
              <Table.TD> Running </Table.TD>
            </Table.TR>
          </Table.TBody>
        </Table>
      </div>

      <div className="push--ends">
        <EmptyDashboard
          headline='Get started with Optimizely X'
          description={ <div>This is a test description about <Link href='http://google.com'>X Feature</Link> with a Google.</div> } button={ (<Button style="highlight">Highlight</Button>) }
          imagePath='https://app.optimizely.com/static/img/x/empty-states/integrations-empty.svg'
        />
      </div>

      <div className="push--ends">
      </div>


  </div>)});
