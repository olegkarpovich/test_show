import React from 'react';

const styles = {
    root: {
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        minHeight: '100vh',
        backgroundColor: 'gray',
    },
    text404: {
        textAlign: 'center',
        fontSize: '150px',
        lineHeight: '100px',
        letteSpacing: '5px',
        color: '#fff',
        marginBottom: '60px',

        '& >span': {
            cursor: 'pointer',
            textShadow:
                '0px 0px 2px #686868, 0px 1px 1px #ddd, 0px 2px 1px #d6d6d6, 0px 3px 1px #ccc, 0px 4px 1px #c5c5c5, 0px 5px 1px #c1c1c1, 0px 6px 1px #bbb, 0px 7px 1px #777, 0px 8px 3px rgba(100, 100, 100, 0.4), 0px 9px 5px rgba(100, 100, 100, 0.1), 0px 10px 7px rgba(100, 100, 100, 0.15), 0px 11px 9px rgba(100, 100, 100, 0.2), 0px 12px 11px rgba(100, 100, 100, 0.25), 0px 13px 15px rgba(100, 100, 100, 0.3)',
            transition: 'all .1s linear',
        },
        '& >span:hover': {
            textShadow:
                '0px 0px 2px #686868, 0px 1px 1px #fff, 0px 2px 1px #fff, 0px 3px 1px #fff, 0px 4px 1px #fff, 0px 5px 1px #fff, 0px 6px 1px #fff, 0px 7px 1px #777, 0px 8px 3px #fff, 0px 9px 5px #fff, 0px 10px 7px #fff, 0px 11px 9px #fff, 0px 12px 11px #fff, 0px 13px 15px #fff',
            transition: 'all .1s linear',
        },
    },
};

class NotFound extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount = () => {
    //     document.title = "404";
    // }

    render() {
        return <div style={styles.root}>
            <div style={styles.text404}>
                <span>4</span>
                <span>0</span>
                <span>4</span>
            </div>
        </div>
    }
}

export default NotFound
