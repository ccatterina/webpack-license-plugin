import IPackageLicenseMeta from './IPackageLicenseMeta'

export default interface IPluginOptions {
  additionalFiles: {
    [filename: string]: (
      packages: IPackageLicenseMeta[]
    ) => string | Promise<string>
  }
  licenseOverrides: { [packageVersion: string]: string }
  outputFilename: string
  replenishDefaultLicenseTexts: boolean
  unacceptableLicenseTest: (license: string) => boolean
}
