// YandexStorageSdk.d.ts

import {
    AbortMultipartUploadCommandInput,
    AbortMultipartUploadCommandOutput,
    CompleteMultipartUploadCommandInput,
    CompleteMultipartUploadCommandOutput,
    CreateMultipartUploadCommandInput,
    CreateMultipartUploadCommandOutput,
    DeleteObjectCommandInput,
    DeleteObjectCommandOutput,
    GetBucketLocationCommandOutput,
    GetBucketVersioningCommandOutput,
    GetObjectCommandInput,
    GetObjectCommandOutput,
    HeadObjectCommandInput,
    HeadObjectCommandOutput,
    ListObjectsCommandInput,
    ListObjectsCommandOutput,
    PutObjectCommandInput,
    PutObjectCommandOutput,
    UploadPartCommandInput,
    UploadPartCommandOutput,
} from '@aws-sdk/client-s3';

export type AbortMultipartUploadParams = Omit<AbortMultipartUploadCommandInput, 'Bucket'>;
export type CompleteMultipartUploadParams = Omit<CompleteMultipartUploadCommandInput, 'Bucket'>;
export type CreateMultipartUploadParams = Omit<CreateMultipartUploadCommandInput, 'Bucket'>;
export type HeadObjectParams = Omit<HeadObjectCommandInput, 'Bucket'>;
export type ListObjectsParams = Omit<ListObjectsCommandInput, 'Bucket'>;
export type PutObjectParams = Omit<PutObjectCommandInput, 'Bucket'>;
export type GetObjectParams = Omit<GetObjectCommandInput, 'Bucket'>;
export type DeleteObjectParams = Omit<DeleteObjectCommandInput, 'Bucket'>;
export type UploadPartParams = Omit<UploadPartCommandInput, 'Bucket'>;

export default class YandexStorageSdk {
    private readonly s3;
    private bucket;
    constructor(accessKeyId: string, secretAccessKey: string, bucket?: string);
    setBucket(bucket: string): void;
    getBucketLocation(): Promise<GetBucketLocationCommandOutput>;
    getBucketVersioning(): Promise<GetBucketVersioningCommandOutput>;
    headObject(params: HeadObjectParams): Promise<HeadObjectCommandOutput>;
    listObjects(params?: ListObjectsParams): Promise<ListObjectsCommandOutput>;
    putObject(params: PutObjectParams): Promise<PutObjectCommandOutput>;
    getObject(params: GetObjectParams): Promise<GetObjectCommandOutput>;
    deleteObject(params: DeleteObjectParams): Promise<DeleteObjectCommandOutput>;
    upload(params: PutObjectParams): Promise<PutObjectCommandOutput>;
    createMultipartUpload(params: CreateMultipartUploadParams): Promise<CreateMultipartUploadCommandOutput>;
    uploadPart(params: UploadPartParams): Promise<UploadPartCommandOutput>;
    completeMultipartUpload(params: CompleteMultipartUploadParams): Promise<CompleteMultipartUploadCommandOutput>;
    abortMultipartUpload(params: AbortMultipartUploadParams): Promise<AbortMultipartUploadCommandOutput>;
    getObjectPath({ Key }: { Key: string }): string;
}
