// Original file: proto/auth_services.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { SignInUserRequest as _auth_SignInUserRequest, SignInUserRequest__Output as _auth_SignInUserRequest__Output } from '../auth/SignInUserRequest';
import type { SignInUserResponse as _auth_SignInUserResponse, SignInUserResponse__Output as _auth_SignInUserResponse__Output } from '../auth/SignInUserResponse';

export interface AuthServiceClient extends grpc.Client {
  SignInUser(argument: _auth_SignInUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  SignInUser(argument: _auth_SignInUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  SignInUser(argument: _auth_SignInUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  SignInUser(argument: _auth_SignInUserRequest, callback: grpc.requestCallback<_auth_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  signInUser(argument: _auth_SignInUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  signInUser(argument: _auth_SignInUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  signInUser(argument: _auth_SignInUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  signInUser(argument: _auth_SignInUserRequest, callback: grpc.requestCallback<_auth_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface AuthServiceHandlers extends grpc.UntypedServiceImplementation {
  SignInUser: grpc.handleUnaryCall<_auth_SignInUserRequest__Output, _auth_SignInUserResponse>;
  
}

export interface AuthServiceDefinition extends grpc.ServiceDefinition {
  SignInUser: MethodDefinition<_auth_SignInUserRequest, _auth_SignInUserResponse, _auth_SignInUserRequest__Output, _auth_SignInUserResponse__Output>
}
