export const hiddenName = (name, length) => {
  if (name.length > length) return name.substr(0, length) + "...";
  return name;
};

export const capitalizeWords = (str) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

export const cutDateName = (string) => {
  const index = string.indexOf(" ", string.indexOf(" ") + 1);
  const newString = string.substring(0, index);

  return capitalizeWords(newString);
};

export const splitStringByHyphen = (string) => {
  const arr = string.replace(/'/gi, "").split("-");
  return arr;
};

// To mau cho rap
export const renderNameTheater = (name, color) => {
  const arr = splitStringByHyphen(name);
  return arr.map((item, index) => {
    return index === 0 ? (
      <span
        key={index}
        className="title__theater "
        style={{ color: color, fontWeight: 500 }}
      >
        {item}
      </span>
    ) : (
      <span key={index}>-{item}</span>
    );
  });
};

export const add_minutes = function (dt, minutes) {
  return new Date(dt.getTime() + minutes * 60000);
};

export const youtube_parser = function (url = " ") {
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : false;
};
