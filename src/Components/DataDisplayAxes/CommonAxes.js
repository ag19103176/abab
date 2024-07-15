import React from "react";
import "./dataDisplay.css";
import "../Graph/toggle.css";
const Axes = ({
  xAxisShowLabel,
  handleshowlabel,
  yAxisShowLabel,
  handleyshowlabel,
  xAxisLabel,
  handlechangelabel,
  yAxisLabel,
  handleychangelabel,
  handleradioangle,
  setxradioshow,
  handleyradioangle,
  setyradioshow,
}) => {
  const angleOptions = ["Hide", "Show"];
  const yangleOptions = ["Hide", "Show"];
  return (
    <div className="axes">
      <div className="form-group">
        <h4>X-Axis</h4>
        <div className="showLabel">
          <label className="label">Show Label</label>
          <label className="switch">
            <input
              type="checkbox"
              checked={xAxisShowLabel}
              onChange={(e) => handleshowlabel(e.target.checked)}
            />
            <span className="slider round"></span>
          </label>
        </div>

        {/* {xAxisShowLabel && (
          <>
            <div>
              <label>Label</label>
              <div>
                <input
                  type="text"
                  value={xAxisLabel}
                  onChange={(e) => handlechangelabel(e.target.value)}
                />
              </div>
            </div>
          </>
        )} */}

        <div>
          <label>Show Lines and Marks</label>
          <div>
            {angleOptions.map((option, index) => (
              <label
                key={index}
                className={`radio-label ${
                  setxradioshow === option ? "active" : ""
                }`}
              >
                <input
                  type="radio"
                  name="angleOption"
                  value={option}
                  checked={setxradioshow === option}
                  onChange={(e) => handleradioangle(e.target.value)}
                  className="radio-input"
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h4>Y-Axis</h4>
        <div className="showLabel">
          <label className="label">Show Label</label>
          <label className="switch">
            <input
              type="checkbox"
              checked={yAxisShowLabel}
              onChange={(e) => handleyshowlabel(e.target.checked)}
            />
            <span className="slider round"></span>
          </label>
        </div>
        {/* 
        {yAxisShowLabel && (
          <div>
            <label>Label</label>
            <div>
              <input
                type="text"
                value={yAxisLabel}
                onChange={(e) => handleychangelabel(e.target.value)}
              />
            </div>
          </div>
        )} */}
      </div>
      <div>
        <div>
          <label>Show Lines and Marks</label>
        </div>
        <div>
          {yangleOptions.map((xoption, index) => (
            <label
              key={index}
              className={`radio-label ${
                setyradioshow === xoption ? "active" : ""
              }`}
            >
              <input
                type="radio"
                name="yangleOption"
                value={xoption}
                checked={setyradioshow === xoption}
                onChange={(e) => handleyradioangle(e.target.value)}
                className="radio-input"
              />
              {xoption}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Axes;
