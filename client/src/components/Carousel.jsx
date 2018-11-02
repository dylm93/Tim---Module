import React, { Component } from 'react';
import Recommendations from './Recommendations';
import style from '../css/Carousel.css';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import Indicators from './Indicators';

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      currentValue: 0,
      translateValue: 0,
    };

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.products !== this.props.products) {
      this.setState({
        products: this.props.products,
      });
    }
  }

  next() {
    if (this.state.currentValue === this.state.products.length - 1) {
      return this.setState({
        currentValue: 0,
        translateValue: 0,
      });
    }
    this.setState(prevState => ({
      currentValue: (prevState.currentValue + 1) * 3,
      translateValue: prevState.translateValue + -this.productWidth(),
    }));
  }

  previous() {
    this.setState(prevState => ({
      currentValue: this.state.currentValue / 3 - 1,
      translateValue: prevState.translateValue - -this.productWidth(),
    }));
  }

  productWidth() {
    return 976;
  }

  render() {
    const length = this.state.products.length;

    return (
      <div className="carousel">
        <div className="recCarousel">
          <div
            className="transformers"
            style={{
              transform: `translate(${this.state.translateValue}px)`,
              transition: 'transform ease-out 0.30s',
            }}
          >
            {this.props.products.map((value, index) => (
              <Recommendations products={value} />
            ))}
          </div>
          <LeftArrow currentValue={this.state.currentValue} previous={this.previous} />
          <RightArrow length={length} next={this.next} currentValue={this.state.currentValue} />
          <ul className="indicator">
            <li />
          </ul>
        </div>
      </div>
    );
  }
}
