class FetchAdapter {
  async get(url: string) {
    const response = await fetch(url);
    const data = await response.json();

    return { data, status: response.status };
  }

  async post(url: string, body: any) {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return { data, status: response.status };
  }
}
