import copy from 'copy-to-clipboard';

export function useCopyToClipboard() {

    function handleCopy(text) {
        copy(text);
        alert(`copied to clipboard : ${text}`);
    }

    return handleCopy;
}