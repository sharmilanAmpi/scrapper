import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from './_proto/auth_services';
import path from 'path';

const options: protoLoader.Options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

const PORT = 5000;
const PROTO_FILE = './proto/auth_services.proto';
const packageDef = protoLoader.loadSync(
  path.resolve(__dirname, PROTO_FILE),
  options
);

const proto = grpc.loadPackageDefinition(
  packageDef
) as unknown as ProtoGrpcType;

const authPackage = proto.auth;

const server = new grpc.Server();

server.addService(authPackage.AuthService.service, {
    SignInUser: () => {}
});

//start the Server
server.bindAsync(
    //port to serve on
    "127.0.0.1:5000",
    //authentication settings
    grpc.ServerCredentials.createInsecure(),
    //server start callback 
    (error, port) => {
      console.log(`listening on port ${port}`);
      server.start();
    }
);

