export const getClosest = (path, obj) => {
    let _path = path;
    path = path.split("_");
    console.log(path)
    while (path.length > 0) {
        let desc = path.reduce((o, i) => o[i], obj);
        if (!desc) return null
        console.log(desc)
        if (desc["description"]) {
            let _desc = { ...desc["description"] };
            const defaultValue = _path.split("_").reduce((o, i) => o[i], obj);
            if (_desc && typeof defaultValue !== "object") {
                _desc["default"] = defaultValue;
            }
            return _desc;
        }
        path.pop();
    }
}

export const toLabel = (str) => {
    return str.replace(
        /(^[a-z]+)|[0-9]+|[A-Z][a-z]+|[A-Z]+(?=[A-Z][a-z]|[0-9])/g,
        function (match, first) {
            if (first) match = match[0].toUpperCase() + match.substr(1);
            return match + " ";
        }
    );
};