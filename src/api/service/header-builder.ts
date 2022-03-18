import {HeadersForGit} from "../model/headers-git";

function getHeadersForGitHub(headers: any): HeadersForGit {
    const headersForGitHub: HeadersForGit = {
        accept: headers.accept,
    };
    if (headers.authorization) {
        headersForGitHub.authorization = `token ${headers.authorization}`;
    }

    return headersForGitHub;
}

export default {getHeadersForGitHub}