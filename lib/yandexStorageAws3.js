// YandexStorageSdk.js

import {
    S3Client,
    GetBucketLocationCommand,
    GetBucketVersioningCommand,
    HeadObjectCommand,
    ListObjectsCommand,
    PutObjectCommand,
    GetObjectCommand,
    DeleteObjectCommand,
    CreateMultipartUploadCommand,
    UploadPartCommand,
    CompleteMultipartUploadCommand,
    AbortMultipartUploadCommand,
} from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';

const BASE_URL = 'https://storage.yandexcloud.net';

export default class YandexStorageSdk {
    constructor(accessKeyId, secretAccessKey, bucket) {
        if (bucket) {
            this.setBucket(bucket);
        }
        this.s3 = new S3Client({
            endpoint: BASE_URL,
            region: 'ru-central1', // Adjust the region if necessary
            credentials: {
                accessKeyId,
                secretAccessKey,
            },
        });
    }

    setBucket(bucket) {
        this.bucket = bucket;
    }

    getBucketLocation() {
        const command = new GetBucketLocationCommand({ Bucket: this.bucket });
        return this.s3.send(command);
    }

    getBucketVersioning() {
        const command = new GetBucketVersioningCommand({ Bucket: this.bucket });
        return this.s3.send(command);
    }

    headObject(params) {
        const preparedParams = { ...params, Bucket: this.bucket };
        const command = new HeadObjectCommand(preparedParams);
        return this.s3.send(command);
    }

    listObjects(params = {}) {
        const preparedParams = { ...params, Bucket: this.bucket };
        const command = new ListObjectsCommand(preparedParams);
        return this.s3.send(command);
    }

    putObject(params) {
        const preparedParams = { ...params, Bucket: this.bucket };
        const command = new PutObjectCommand(preparedParams);
        return this.s3.send(command);
    }

    getObject(params) {
        const preparedParams = { ...params, Bucket: this.bucket };
        const command = new GetObjectCommand(preparedParams);
        return this.s3.send(command);
    }

    deleteObject(params) {
        const preparedParams = { ...params, Bucket: this.bucket };
        const command = new DeleteObjectCommand(preparedParams);
        return this.s3.send(command);
    }

    upload(params) {
        const preparedParams = { ...params, Bucket: this.bucket };
        const upload = new Upload({
            client: this.s3,
            params: preparedParams,
        });

        // Optionally, you can add event listeners for progress
        // upload.on('httpUploadProgress', (progress) => {
        //   console.log(progress);
        // });

        return upload.done();
    }

    createMultipartUpload(params) {
        const preparedParams = { ...params, Bucket: this.bucket };
        const command = new CreateMultipartUploadCommand(preparedParams);
        return this.s3.send(command);
    }

    uploadPart(params) {
        const preparedParams = { ...params, Bucket: this.bucket };
        const command = new UploadPartCommand(preparedParams);
        return this.s3.send(command);
    }

    completeMultipartUpload(params) {
        const preparedParams = { ...params, Bucket: this.bucket };
        const command = new CompleteMultipartUploadCommand(preparedParams);
        return this.s3.send(command);
    }

    abortMultipartUpload(params) {
        const preparedParams = { ...params, Bucket: this.bucket };
        const command = new AbortMultipartUploadCommand(preparedParams);
        return this.s3.send(command);
    }

    getObjectPath({ Key }) {
        return `${BASE_URL}/${this.bucket}/${Key}`;
    }
}
