async function processData() {
    try {
        console.log("データ取得開始");
        const result = await fetchData();   // fetchData()のPromiseが解決するまで待機
        console.log(result.message);        // "データ取得成功"
        console.log(result.data);           // [1, 2, 3]
        // ここでresultを使った後続の処理が書ける
    } catch (error) {
        console.error("エラーが発生しました:", error);
    } finally {
        console.log("非同期処理が終了（async/await）");
    }
}

processData();  // async関数はPromiseを返すが、ここでは即時実行
