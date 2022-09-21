function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var antd = require('antd');
var icons = require('@ant-design/icons');
require('antd/dist/antd.css');

var CustomButton = function CustomButton(props) {
  var children = props.children,
      backgroundColor = props.backgroundColor,
      color = props.color,
      size = props.size,
      height = props.height,
      width = props.width,
      shape = props.shape,
      htmlType = props.htmlType,
      onClick = props.onClick,
      disabled = props.disabled;
  var antdDefaultProps = {};
  if (htmlType) antdDefaultProps = {
    htmlType: htmlType
  };
  var styles = {
    height: '',
    width: '',
    backgroundColor: '',
    color: ''
  };
  if (size) styles.size = size;
  if (color) styles.color = color;
  if (backgroundColor) styles.backgroundColor = backgroundColor;
  if (height) styles.height = height;
  if (width) styles.width = width;
  if (shape) styles.shape = shape;
  return React__default.createElement(antd.Button, Object.assign({}, antdDefaultProps, {
    disabled: disabled,
    shape: shape,
    size: size,
    style: styles,
    onClick: onClick
  }), children);
};
CustomButton.displayName = 'CustomButton';
CustomButton.defaultProps = {
  children: 'hii joveo',
  size: 'middle',
  shape: 'default'
};

var SearchInput = function SearchInput(props) {
  var Search = antd.Input.Search;

  var onSearch = function onSearch(value) {
    return console.log(value);
  };

  return React__default.createElement(Search, {
    placeholder: props.palceholder,
    onSearch: onSearch,
    enterButton: true
  });
};
SearchInput["default"] = {
  placeholder: 'Please Enter Text'
};

var ProductCard = function ProductCard(props) {
  var image = props.image,
      location = props.location,
      price = props.price,
      type = props.type;
  var Title = antd.Typography.Title,
      Text = antd.Typography.Text;

  var _useState = React.useState(false),
      like = _useState[0],
      setLike = _useState[1];

  return React__default.createElement(antd.Card, {
    hoverable: true,
    style: {
      width: 300
    },
    cover: React__default.createElement("img", {
      alt: 'example',
      src: image
    })
  }, React__default.createElement(antd.Space, null, React__default.createElement(Title, {
    level: 5
  }, type), React__default.createElement(antd.Divider, {
    type: 'vertical',
    style: {
      backgroundColor: 'black',
      width: 2,
      top: -3
    }
  }), React__default.createElement(Title, {
    level: 5
  }, price, " / month")), React__default.createElement("br", null), React__default.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, React__default.createElement(Text, {
    keyboard: true
  }, location), like ? React__default.createElement("img", {
    src: 'https://img.icons8.com/emoji/452/red-heart.png',
    style: {
      height: '50px',
      width: '50px',
      position: 'relative',
      top: '21px',
      left: '21px'
    },
    onClick: function onClick() {
      setLike(false);
    }
  }) : React__default.createElement(icons.HeartOutlined, {
    onClick: function onClick() {
      if (!like) setLike(true);
    },
    style: {
      fontSize: '50px',
      position: 'relative',
      top: '21px',
      left: '21px'
    }
  })));
};
ProductCard["default"] = {
  image: 'https://i0.wp.com/civillane.com/wp-content/uploads/2022/03/2BHK-Interior-Design-Cost-In-Pune.jpg?fit=900%2C615&ssl=1',
  type: '2 BHK',
  price: '2500 / month',
  location: 'Banglore'
};

var Meta = antd.Card.Meta;
var LoadingCard = function LoadingCard(props) {
  var type = props.type,
      location = props.location,
      contactNo = props.contactNo,
      image = props.image,
      price = props.price,
      userName = props.userName;
  var Title = antd.Typography.Title;

  var _useState = React.useState(true),
      loading = _useState[0],
      setLoading = _useState[1];

  React.useEffect(function () {
    setTimeout(function () {
      setLoading(false);
    }, 2000);
  }, []);
  return React__default.createElement(antd.Card, {
    style: {
      width: 'fit-content',
      marginTop: 16
    }
  }, React__default.createElement(antd.Skeleton, {
    loading: loading,
    avatar: true,
    active: true
  }, React__default.createElement(Meta, {
    avatar: React__default.createElement(antd.Avatar, {
      src: image,
      style: {
        height: 100,
        width: 100
      }
    }),
    title: type,
    description: 'This is the description'
  }), React__default.createElement(antd.Space, {
    style: {
      paddingTop: 12
    }
  }, React__default.createElement(Title, {
    level: 5
  }, type), React__default.createElement(antd.Divider, {
    type: 'vertical',
    style: {
      backgroundColor: 'black',
      width: 2,
      top: -3
    }
  }), React__default.createElement(Title, {
    level: 5
  }, price, " / month")), React__default.createElement("br", null), React__default.createElement("div", {
    style: {
      gap: 2
    }
  }, React__default.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, React__default.createElement(icons.EnvironmentOutlined, {
    style: {
      fontSize: '20px'
    }
  }), ' ', React__default.createElement(Title, {
    level: 5
  }, location)), React__default.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, React__default.createElement(icons.UserOutlined, {
    style: {
      fontSize: '20px'
    }
  }), ' ', React__default.createElement(Title, {
    style: {
      color: 'green'
    },
    level: 5
  }, ' ', userName)), React__default.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, React__default.createElement(icons.PhoneOutlined, {
    style: {
      fontSize: '20px'
    }
  }), ' ', React__default.createElement(Title, {
    level: 5
  }, ' ', React__default.createElement("a", {
    href: 'tel:123-456-7890'
  }, contactNo))))));
};
LoadingCard.defaultProps = {
  image: 'https://joeschmoe.io/api/v1/random',
  location: 'banglore',
  price: 2500,
  type: '2 BHK',
  contactNo: 964444,
  userName: 'shivam kawde'
};

exports.CustomButton = CustomButton;
exports.LoadingCard = LoadingCard;
exports.ProductCard = ProductCard;
exports.SearchInput = SearchInput;
//# sourceMappingURL=index.js.map
