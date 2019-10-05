import React from "react";
import PropTypes from "prop-types";
import "./Splatter.css";

const Splatter = ({size, color}) => {
    return (
        <div className="Splatter">
            <p className="Splatter-text">restart</p>
            <svg
                width={size}
                height={size}
                fill={color}
                onClick={() => console.log("svg clicked")}
                x="0px"
                y="0px"
                viewBox="0 0 275.993 275.993"
            >
                <g>
                    <path
                        d="M272.854,138.286c-2.137-3.195-5.19-5.287-10.123-6.223c-8.412-1.597-13.799,3.534-18.549,7.887
		c-4.57,4.191-10.636,10.765-17.174,11.035l-0.836-0.975c-6.667-9.709,6.149-16.155,16.145-18.466
		c6.068-1.403,19.197-2.747,20.659-10.45c0.789-4.156-2.087-10.051-5.638-11.576c-4.491-1.928-8.836,1.746-11.951,3.873
		c-4.254,2.902-6.146,4.714-9.901,8.122c-4.702,4.266-7.124,8.616-13.47,7.412c-8.878-1.686-2.348-16.645-1.279-22.274
		c-13.915-13.703-12.676,3.264-21.556,2.333c-2.979-5.349,17.771-37.807,21.621-43.03c7.423-10.069,24.445-25.542,26.594-36.86
		c1.14-6.003-0.842-9.442-4.075-10.872l-4.168-0.792c-3.033,0.022-6.389,1.121-9.203,3.037c-9.742,6.637-17.33,41.613-27.064,59.965
		c-16.923,31.91-19.975,12.717-18.947,7.298c1.588-8.356,19.241-32.148,3.902-35.06c-11.805-2.242-13.343-2.249-15.645,9.881
		c-1.539,8.104,4.529,14.821,3.219,21.725c-2.18,11.483-18.899,23.564-17.766-28.794c0.159-7.356,6.49-39.442-4.678-41.563
		c-5.349-1.015-8.235,4.692-9.107,9.287c-0.807,4.252,1.066,10.501,1.92,14.123c2.365,10.034,11.947,42.621,1.946,50.541
		c-8.752,6.928-9.227-11.028-10.793-16.742c-1.199-4.381-3.057-11.087-8.714-10.964c-12.361,0.27-2.887,14.485-10.975,19.136
		c-8.439,4.853-18.543-4.23-18.332-17.774c0.157-10.018,4.523-22.125-6.388-24.197c-21.197-4.024-9.071,25.001-5.06,33.534
		c4.041,8.594,8.088,18.764-2.903,23.945c-8.263,3.896-21.588-10.242-23.243-16.944c-3.141-12.73,0.554-35.339-16.888-38.65
		c-10.751-2.041-17.481,28.831-10.921,42.153c11.814,23.994,28.242,8.926,41.42,21.947c2.75,2.719,3.192,5.039,2.41,9.161
		c-1.042,5.489-11.831,4.298-13.66,13.93c-1.572,8.277,9.925,10.575,8.659,17.25c-1.593,8.386-12.967,9.401-19.535,10.968
		c-25.146,6-24.948-0.137-45.135-3.969c-2.615-0.497-5.877,3.594-7.14,8.589l-0.402,2.12c-0.731,5.758,1.47,12.006,10.256,13.674
		c21.085,4.002,29.029-1.215,45.998-9.494c4.726-2.305,12.602-7.266,17.747-7.936c15.328-1.997,23.963,12.342,5.66,15.119
		c-10.627,1.612-22.929,6.698-19.615,20.096c0.76,3.072,1.949,3.972,5.615,4.668c8.817,1.674,13.951-11.122,22.903-9.422
		c4.759,0.903,8.799,6.84,7.896,11.598c-2.482,13.081-19.527,26.321-12.891,37.322c3.377,5.598,11.836,7.292,17.757,4.949
		c3.69-1.459,10.283-10.852,11.308-16.252c0.967-5.092-2.035-11.486-1.455-15.114c0.596-3.735,7.605-7.585,11.145-6.913
		c6.131,1.164,3.95,6.258,12.281,7.84c9.45,1.793,9.907-11.89,22.017-9.59c6.17,1.17,4.717,47.168,2.79,53.727
		c-3.845,13.088,13.536,3.737,11.884-3.475c-0.801-3.487-1.682-5.064-2.765-8.213c-4.885-14.217,3.467-16.646,5.734-28.591
		l-0.001-0.001c1.168-6.148-2.727-17.959,6.741-16.162c3.038,0.576,7.309,9.149,8.376,12.042c3.791,10.269,0.46,24.254,1.045,34.777
		c1.008,18.102,18.122,16.013,21.781-3.257c1.33-7.006,0.408-14.812-1.54-19.783c-4.524-11.541-15.11-15.181-19.72-28.234
		c-0.762-2.158-2.32-6.733-1.539-9.487c0.767-2.704,5.029-4.62,7.869-4.081c7.034,1.335,22.494,21.846,28.441,11.105
		c8.216-14.833-25.495-12.116-23.764-21.234c1.991-10.489,52.549-2.67,58.926-4.102c7.39-1.661,11.74-5.971,13.71-11.005
		l1.272-6.711C276.034,145.253,274.895,141.338,272.854,138.286z"
                    />
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
            </svg>
        </div>
    );
};

Splatter.propTypes = {
    size: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
};

Splatter.defaultProps = {
    size: "12vmin",
    color: "tomato"
};

export default Splatter;