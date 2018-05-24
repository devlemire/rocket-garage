import React, { Component } from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

export default class InputWithLabel extends Component {
  state = {
    selectedOption: this.props.data ? this.props.data[0].value : ''
  }

  updateState = (prop, val) => {
    this.setState({ [prop]: val })
    this.props.updateFn(this.props.stateProp, val)
  }

  render() {
    const {
      label,
      placeholder,
      inputType,
      isSelect,
      autoComplete,
      data,
      containerWidth,
      selectWidth,
      noMargin,
      stateProp,
      updateFn
    } = this.props

    const { selectedOption } = this.state

    return (
      <div
        style={{ width: containerWidth }}
        className="InputWithLabel-container"
      >
        <span style={{ width: selectWidth }}>{label}</span>

        {isSelect ? (
          <Select
            style={{ width: selectWidth, border: 'none' }}
            menuContainerStyle={{
              border: '1px solid rgba(0, 163, 255, 0.3)',
              borderTop: 'none',
              padding: '0px 10px'
            }}
            className="select-blue"
            name="form-field-name"
            value={selectedOption}
            onChange={selected =>
              this.updateState('selectedOption', selected.value)
            }
            options={data}
          />
        ) : (
          <input
            className="input-blue"
            style={{ margin: noMargin ? '0px' : '' }}
            placeholder={placeholder}
            type={inputType}
            autoComplete={autoComplete}
            onChange={e => updateFn(stateProp, e.target.value)}
          />
        )}
      </div>
    )
  }
}
