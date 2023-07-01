import Head from "next/head";
import styled from "styled-components";
import $ from "jquery";
import _ from "lodash";
import { useState, useEffect } from "react";

export default function Image() {
  const [preview, setPreview] = useState();
  const [disabled, setDisabled] = useState(false);
  const [sliderValue, setSliderValue] = useState(100);
  const [activeFilter, setActiveFilter] = useState("Brightness");
  const [imageStyle, setImageStyle] = useState({});
  const [filter, setFilter] = useState({
    Brightness: 100,
    Saturation: 100,
    Inversion: 0,
    Grayscale: 0,
  });
  const loadImage = (e: any) => {
    const files = Array.from(e.target.files);
    if (!files) return;
    let file = files[0] as any;
    setPreview(URL.createObjectURL(file) as any);
    setDisabled(true);
  };

  const updateFilter = (event: any) => {
    const value = event.target.value;
    setSliderValue(value);
    let newFilter = filter;
    activeFilter === "Brightness" ? (newFilter.Brightness = value) : null;
    activeFilter === "Saturation" ? (newFilter.Saturation = value) : null;
    activeFilter === "Inversion" ? (newFilter.Inversion = value) : null;
    activeFilter === "Grayscale" ? (newFilter.Grayscale = value) : null;
    setFilter(newFilter);
    applyFilters();
  };

  const applyFilters = () => {
    let newStyle = {
      filter: `brightness(${filter.Brightness}%) saturate(${filter.Saturation}%) invert(${filter.Inversion}%) grayscale(${filter.Grayscale}%)`,
    };

    setImageStyle(newStyle);
  };

  const H2 = styled.h2`
    font-size: 22px;
    font-weight: 500;
    color: var(--color-primary);
  `;

  const Titre = styled.label`
    display: block;
    font-size: 16px;
    margin-bottom: 12px;
  `;

  const Options = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  `;

  const Range = styled.input`
    width: 100%;
    height: 5px;
    accent-color: var(--color-primary);
  `;

  return (
    <>
      <Head>
        <title>Raed Elmajdoub - Image Editor Demo</title>
      </Head>
      <div className="body__imageEditor">
        <div
          className={
            !disabled
              ? "container__imageEditor disable"
              : "container__imageEditor"
          }
        >
          <H2>Image Editor</H2>
          <div className="wrapper__imageEditor">
            <div className="editor-panel__imageEditor">
              <div className="filter__imageEditor">
                <Titre>Filters</Titre>
                <Options>
                  <button
                    className={
                      activeFilter === "Brightness" ? "active__imageEditor" : ""
                    }
                    onClick={() => {
                      setActiveFilter("Brightness");
                      setSliderValue(filter.Brightness);
                    }}
                  >
                    Brightness
                  </button>
                  <button
                    className={
                      activeFilter === "Saturation" ? "active__imageEditor" : ""
                    }
                    onClick={() => {
                      setActiveFilter("Saturation");
                      setSliderValue(filter.Saturation);
                    }}
                  >
                    Saturation
                  </button>
                  <button
                    onClick={() => {
                      setActiveFilter("Inversion");
                      setSliderValue(filter.Inversion);
                    }}
                    className={
                      activeFilter === "Inversion" ? "active__imageEditor" : ""
                    }
                  >
                    Inversion
                  </button>
                  <button
                    onClick={() => {
                      setActiveFilter("Grayscale");
                      setSliderValue(filter.Grayscale);
                    }}
                    className={
                      activeFilter === "Grayscale" ? "active__imageEditor" : ""
                    }
                  >
                    Grayscale
                  </button>
                </Options>
                <div className="slider__imageEditor">
                  <div className="filter-info__imageEditor">
                    <p className="name__imageEditor">{activeFilter}</p>
                    <p className="value__imageEditor">{sliderValue}%</p>
                  </div>
                  <Range
                    onChange={updateFilter}
                    type="range"
                    value={sliderValue}
                    min={0}
                    max={
                      activeFilter === "Brightness" ||
                      activeFilter === "Saturation"
                        ? 200
                        : 100
                    }
                    step={1}
                  />
                </div>
              </div>
              <div className="rotate__imageEditor">
                <label className="title__imageEditor">Rotate & Flip</label>
                <div className="options__imageEditor">
                  <button>
                    <i className="fa-solid fa-rotate-left"></i>
                  </button>
                  <button>
                    <i className="fa-solid fa-rotate-right"></i>
                  </button>
                  <button>
                    <i className="bx bx-reflect-vertical"></i>
                  </button>
                  <button>
                    <i className="bx bx-reflect-horizontal"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="preview-img__imageEditor">
              <img
                style={imageStyle}
                src={
                  preview ||
                  "https://healthnewlynn.co.nz/wp-content/uploads/Team.png"
                }
                alt="Upload image"
              />
            </div>
          </div>
          <Options className="controls__imageEditor">
            <button className="reset-filter__imageEditor">Reset Filters</button>
            <div className="row__imageEditor">
              <input
                onChange={(e) => loadImage(e)}
                type="file"
                className="file-input__imageEditor"
                accept="image/*"
              />
              <button className="choose-img__imageEditor">Choose Image</button>
              <button className="save-img__imageEditor">Save Image</button>
            </div>
          </Options>
        </div>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css?family=Muli&display=swap");
        @import url("https://fonts.googleapis.com/css?family=Quicksand&display=swap");
        .body__imageEditor {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
        }
        .container__imageEditor {
          width: 850px;
          background: var(--color-bg-variant);
          border-radius: 2rem;
          padding: 2.4rem 5rem;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .container__imageEditor.disable :where(.editor-panel__imageEditor, .reset-filter__imageEditor, .save-img__imageEditor) {
          opacity: 0.2;
          pointer-events: none !important;
        }

        .container__imageEditor .wrapper__imageEditor {
          display: flex;
          margin: 20px 0;
          min-height: 335px;
        }

        .wrapper__imageEditor .editor-panel__imageEditor {
          width: 280px;
          padding: 15px 20px;
          border: 1px solid var(--color-light);
        }

        .editor-panel__imageEditor button {
          height: 40px;
          font-size: 14px;
          color: var(--color-disabled);
          margin-bottom: 8px;
          border-raduis: 3px;
          cursor: pointer;
        }

        .editor-panel__imageEditor .filter__imageEditor button {
          width: calc(100% / 2 - 4px);
        }

        .active__imageEditor {
          background: var(--color-primary) !important;
          color: var(--color-bg) !important;
          cursor: default !important;
        }

        .filter__imageEditor .slider__imageEditor {
          margin-top: 12px;
        }

        .filter__imageEditor .slider__imageEditor .filter-info__imageEditor {
          display: flex;
          justify-content: space-between;
          color: var(--color-light);
          font-size: 14px;
        }

        .editor-panel__imageEditor .rotate {
          margin-top: 17px;
        }

        .editor-panel__imageEditor .rotate__imageEditor button {
          width: calc(100% / 4 - 3px);
        }

        .rotate__imageEditor
          button:nth-child(3)
          .rotate__imageEditor
          button:nth-child(4) {
            font-size 18px;
        }

        .wrapper__imageEditor .preview-img__imageEditor {
          flex-grow: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 25px;
          height: 100%;
        }

        .preview-img__imageEditor img {
          max-width: 490px;
          max-height: 335px;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .controls__imageEditor button {
          cursor: pointer;
          background: var(--color-primary);
          font-size: 14px;
          padding: 11px 20px;
          border-radius: 3px;
        }

        .controls__imageEditor .reset-filter__imageEditor {
          border: 1px solid var(--color-light);
          color: var(--color-light);
          background: transparent;
        }

        .controls__imageEditor .choose-img__imageEditor {
          margin-right: 15px;
          background: transparent;
          border: 1px solid var(--color-primary);
          color: var(--color-primary);
        }

        @media screen and (max-width: 960px) {
          .container__imageEditor {
            padding: 25px;
          }

          .container__imageEditor .editor-panel__imageEditor {
            width: 100%
          }

          .wrapper__imageEditor .preview-img__imageEditor {
            width: 100%;
            margin: 0 0 15px;
          }
        }

        @media screen and (max-width: 600px) {
          .controls__imageEditor button {
            width: 100%;
            margin-bottom: 10px;
          }
        }
      `}</style>
    </>
  );
}
