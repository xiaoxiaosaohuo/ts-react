import * as React from 'react';
import { shallow, mount} from 'enzyme';
import ReactSFC, { Title, Button} from './ReactSFC';
import toJson from "enzyme-to-json";
/* tslint:disable */
// describe 可以用于测试组，在组里写多个test。it 是test的别名
describe('ReactSFC render test', () => {
    const wrapper = shallow(<ReactSFC message="jinxin" />);
    // console.log(wrapper.debug());
    // expect(wrapper.text()).toEqual("jinxin");
    test("should contain 2 span elements",()=>{
        expect(wrapper.find("span").length).toBe(2);
    });
    test("should contain container className", () => {
        expect(wrapper.find(".container").exists()).toBeTruthy();
    });
    test("ul children length", () => {
        expect(wrapper.find("ul").children().length).toBe(3);
    });
    test("ul has class ul-wrapper", () => {
      expect(wrapper.find("ul").hasClass("ul-wrapper")).toBe(true);
    });
    test("h1 text equal ", () => {
        expect(wrapper.find("h1").text()).toEqual("welcome use jest");
    });
    test("App snapshot",()=>{
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    
});
describe("Title",()=>{
    test("Title prop address", () => {
        const wrapper = shallow(<Title address="https://www.baidu.com" />);
        expect(wrapper.instance().props.address).toBe("https://www.baidu.com");
    });
    test("Title prop href", () => {
      const wrapper = shallow(<Title address="https://www.baidu.com" />);
      expect(wrapper.props().href).toBe("https://www.baidu.com");
    });
    test("Title prop hide", () => {
        const wrapper = shallow(<Title hide={true} address="https://www.baidu.com" />);
        expect(wrapper.find("a").length).toBe(0)
    });
    test("set Title hide prop",()=>{
        const wrapper = shallow(<Title  address="https://www.baidu.com" />);
        wrapper.setProps({hide:true});
        expect(wrapper.find("a").length).toBe(0)

    })
    
})

describe("mount app",()=>{
    test("match snapshot",()=>{
        const tree = mount(<ReactSFC message="mount" />)
        expect(toJson(tree)).toMatchSnapshot();
    })
})

describe("simulate event",()=>{
    test("click button",()=>{
        const wrapper = mount(<ReactSFC message="mount" />);
        const btn = wrapper.find("button");
        //  console.log(wrapper.debug());
        expect(btn.text()).toBe("off");
        btn.simulate("click");
        expect(btn.text()).toBe("on");

    })
    test("onChange event",()=>{
        const wrapper = shallow(<Button/>);
        const input = wrapper.find("input");
        expect(wrapper.find(".input-value").text()).toBe("");
        input.simulate('change', { currentTarget: { value: 'Tyler' } });
        expect(wrapper.find("span.input-value").text()).toBe("Tyler");

    })
    test("button lifecycle", () => {
        jest.spyOn(Button.prototype,"componentDidMount");
        const wrapper = shallow(<Button/>);
        console.log(wrapper.instance());
        expect(Button.prototype.componentDidMount.mock.calls.length).toBe(1);

    })
})