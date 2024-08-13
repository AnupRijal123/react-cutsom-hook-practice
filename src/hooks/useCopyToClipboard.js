import copy from 'copy-to-clipboard';
// import { useState } from 'react';

export function useCopyToClipboard() {

    function handleCopy(text) {
        copy(text);
        alert(`copied to clipboard : ${text}`);
    }

    return handleCopy;
}