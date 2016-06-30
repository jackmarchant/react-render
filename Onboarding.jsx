'use strict';

var React = require('react');

/**
 * Component
 */
class Onboarding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getTermsLink = this.getTermsLink.bind(this);
    this.renderTermsCheckbox = this.renderTermsCheckbox.bind(this);
  }

  /**
   * Get the terms link relevant to the intention of the user
   * to work or to hire
   *
   * @return  string
   */
  getTermsLink() {
    if (this.props.data.intent == 'work') {
      return '/legal/consultant-terms';
    } else if (this.props.data.intent == 'hire') {
      return '/legal/client-terms';
    }
  }

  /**
   * Render an email error message if it already exists
   *
   * @return  element
   */
  renderEmailError() {
    const enteredEmail = this.props.error.email;
    const hasNotChanged = (enteredEmail == this.props.data.email);

    if (enteredEmail && hasNotChanged) {
      return (
        <span className="c-form-element__label__description">'{this.props.error.email}' already exists in our system. Please use another email.</span>
      );
    }
    return null;
  }

  /**
   * Render the terms checkbox when user intent is set
   *
   * @return  element|null
   */
  renderTermsCheckbox() {
    if (this.props.data.intent) {
      return (
        <div className="c-form__row">
          <div className="c-form-element">
            <label className="c-form-element__label" htmlFor="terms">
              <input type="checkbox" onChange={this.props.handleCheckbox.bind(this, 'terms')} checked={(this.props.data.terms) ? 'checked' : ''} id="terms"/>
              <span className="c-checkbox__label-text">I have read and I agree to the <a href={this.getTermsLink()}>terms</a> of use and <a href="/legal/privacy-policy">privacy policy</a></span>
            </label>
          </div>
        </div>
      );
    }

    return null;
  }

  /**
   * Render this component
   *
   * @return  element
   */
  render() {
    const radioButtonClasses = {
      work: 'c-radio-button__label c-radio-button__label--primary',
      hire: 'c-radio-button__label c-radio-button__label--primary'
    };

    return (
      <fieldset>
        <legend className="heading heading--size-x-large heading--weight-light u-text-align-center u-s-mb-base">
          {this.props.legend}
        </legend>
        <div className="c-form__row c-form__row--spacing-small">
          <div className="c-form-element">
            <label className="c-form-element__label" htmlFor="email">Your email</label>
            <span className="c-form-element__label__description u-s-mb-tiny">(Don't worry, we won't spam you. You can read our <a href="/legal/privacy-policy">privacy policy</a>)</span>
            <input
              className="text-input"
              type="email"
              id="email"
              value={this.props.data.email}
              onChange={this.props.handleChange.bind(this, 'email')}
            />
            {this.renderEmailError()}
          </div>
        </div>
        <div className="c-form__row c-form__row--spacing-small">
          <div className="c-form-element">
            <label htmlFor="firstname" className="c-form-element__label">First name</label>
            <input className="text-input" onChange={this.props.handleChange.bind(this, 'firstname')} value={this.props.data.firstname} type="text" ref="firstname" id="firstname"/>
          </div>
        </div>
        <div className="c-form__row">
          <div className="c-form-element">
            <label className="c-form-element__label" htmlFor="lastname">Last name</label>
            <input className="text-input" onChange={this.props.handleChange.bind(this, 'lastname')} value={this.props.data.lastname} type="text" id="lastname"/>
          </div>
        </div>
        <fieldset>
          <legend className="u-hide-visually">What would you like to do?</legend>
          <div className="c-form__row">
            <div className="l-flex-grid l-flex-grid--align-center l-flex-grid--gutter-horizontal-base">
              <div className="l-flex-grid__item l-flex-grid__item--allow-grow">
                <input
                  className="c-radio-button__input c-radio-button__input--primary"
                  name="intent"
                  type="radio"
                  id="work"
                  value="work"
                  onChange={this.props.handleChange.bind(this, 'intent')}
                />
                <label className={radioButtonClasses.work} htmlFor="work">
                  <span>I want to WORK</span>
                </label>
              </div>
              <div className="l-flex-grid__item l-flex-grid__item--align-middle">OR</div>
              <div className="l-flex-grid__item l-flex-grid__item--allow-grow">
                <input
                  className="c-radio-button__input c-radio-button__input--primary"
                  name="intent"
                  type="radio"
                  value="hire"
                  id="hire"
                  onChange={this.props.handleChange.bind(this, 'intent')}
                />
                <label className={radioButtonClasses.hire} htmlFor="hire">
                  <span>I want to HIRE</span>
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        {this.renderTermsCheckbox()}
      </fieldset>
    );
  }
}

module.exports = Onboarding;