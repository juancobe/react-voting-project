import React from 'react';
import ReactDOM from 'react-dom';
import Results from '../../src/components/Results';
import { mount, render } from 'enzyme';
import {List, Map} from 'immutable';

it('renders entries with vote counts or zero', () => {
	const pair = List.of('Trainspotting', '28 Days Later');
	const tally = Map({'Trainspotting': 5});
	const component = mount(<Results pair={pair} tally={tally} />);

	expect(component.find('.entry').length).toBe(2);
	expect(component.find('.entry').at(0).find('h1').text()).toBe('Trainspotting');
	expect(component.find('.entry').at(0).find('.voteCount').text()).toBe('5');
	expect(component.find('.entry').at(1).find('h1').text()).toBe('28 Days Later');	
	expect(component.find('.entry').at(1).find('.voteCount').text()).toBe('0');
})

it('invokes the next callback when next button is clicked', () => {
	let nextInvoked = false;
	const next = () => nextInvoked = true;

	const pair = List.of('Trainspotting', '28 Days Later');
	const component = mount(<Results pair={pair} tally={Map()} next={next} />);
	component.ref('next').simulate('click');

	expect(nextInvoked).toBe(true);

})