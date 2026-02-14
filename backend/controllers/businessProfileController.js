import { getAuth } from '@clerk/express'
import BusinessProfile from '../models/businessProfileModel.js'

const API_BASE = process.env.NEXT_PUBLIC_SERVER_URL;

//file to url
// function uploadedFilesToUrls(req) {
//   const urls = {}
//   if (!req.files) return urls

//   const logoArr = req.files.logoName || req.files.logo || []
//   const stampArr = req.files.stampName || req.files.stamp || []
//   const sigArr = req.files.signatureNameMeta || req.files.signature || []

//   if (logoArr[0]) urls.logoUrl = `${API_BASE}/uploads/${logoArr[0].filename}`
//   if (stampArr[0]) urls.stampUrl = `${API_BASE}/uploads/${stampArr[0].filename}`
//   if (sigArr[0]) urls.signatureUrl = `${API_BASE}/uploads/${sigArr[0].filename}`

//   return urls
// }

// Helper to convert buffer to Data URI (Base64)
function fileToDataUri(file) {
  if (!file) return null;
  const b64 = file.buffer.toString('base64');
  return `data:${file.mimetype};base64,${b64}`;
}

function processUploadedFiles(req) {
  const dataUris = {}
  if (!req.files) return dataUris

  const logoArr = req.files.logoName || []
  const stampArr = req.files.stampName || []
  const sigArr = req.files.signatureNameMeta || []

  if (logoArr[0]) dataUris.logoUrl = fileToDataUri(logoArr[0])
  if (stampArr[0]) dataUris.stampUrl = fileToDataUri(stampArr[0])
  if (sigArr[0]) dataUris.signatureUrl = fileToDataUri(sigArr[0])

  return dataUris
}

//  CREATE BUSINESS PROFILE
export async function createBusinessProfile(req, res) {
  try {
    const { userId } = getAuth(req)

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required.',
      })
    }

    const body = req.body || {}
    // const fileUrls = uploadedFilesToUrls(req)
    const fileDataUris = processUploadedFiles(req)

    const profile = new BusinessProfile({
      owner: userId,
      businessName: body.businessName || 'ABC Solutions',
      email: body.email || '',
      address: body.address || '',
      phone: body.phone || '',
      gst: body.gst || '',
      // logoUrl: fileUrls.logoUrl || body.logoUrl || null,
      // stampUrl: fileUrls.stampUrl || body.stampUrl || null,
      // signatureUrl: fileUrls.signatureUrl || body.signatureUrl || null,
      // Store the Base64 string directly in your existing logoUrl/stampUrl fields
      logoUrl: fileDataUris.logoUrl || body.logoUrl || null,
      stampUrl: fileDataUris.stampUrl || body.stampUrl || null,
      signatureUrl: fileDataUris.signatureUrl || body.signatureUrl || null,
      signatureOwnerName: body.signatureOwnerName || '',
      signatureOwnerTitle: body.signatureOwnerTitle || '',
      defaultTaxPercent:
        body.defaultTaxPercent !== undefined
          ? Number(body.defaultTaxPercent)
          : 10,
    })

    const saved = await profile.save()
    return res.status(201).json({
      success: true,
      data: saved,
      message: 'Business Profile Created.',
    })
  } catch (err) {
    console.error('CreateBusinessProfile ERROR: ', err)
    return res.status(500).json({
      success: false,
      message: 'Server Error',
    })
  }
}

//UPDATE BUSINESS PROFILE
export async function updateBusinessProfile(req, res) {
  try {
    const { userId } = getAuth(req) || {}
    if (!userId) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required.',
      })
    }

    const { id } = req.params
    const body = req.body || {}
    // const fileUrls = uploadedFilesToUrls(req)
    const fileDataUris = processUploadedFiles(req)

    const existing = await BusinessProfile.findById(id)

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: 'Business profile not found.',
      })
    }

    if (existing.owner.toString() !== userId) {
      return res.status(403).json({
        success: false,
        message: 'Forbidden: Not your profile.',
      })
    }

    const update = {}
    if (body.businessName !== undefined) update.businessName = body.businessName
    if (body.email !== undefined) update.email = body.email
    if (body.address !== undefined) update.address = body.address
    if (body.phone !== undefined) update.phone = body.phone
    if (body.gst !== undefined) update.gst = body.gst

    // if (fileUrls.logoUrl) update.logoUrl = fileUrls.logoUrl
    if (fileDataUris.logoUrl) update.logoUrl = fileDataUris.logoUrl
    else if (body.logoUrl !== undefined) update.logoUrl = body.logoUrl

    // if (fileUrls.stampUrl) update.stampUrl = fileUrls.stampUrl
    if (fileDataUris.stampUrl) update.stampUrl = fileDataUris.stampUrl
    else if (body.stampUrl !== undefined) update.stampUrl = body.stampUrl

    // if (fileUrls.signatureUrl) update.signatureUrl = fileUrls.signatureUrl
    if (fileDataUris.signatureUrl) update.signatureUrl = fileDataUris.signatureUrl
    else if (body.signatureUrl !== undefined)
      update.signatureUrl = body.signatureUrl

    if (body.signatureOwnerName !== undefined)
      update.signatureOwnerName = body.signatureOwnerName
    if (body.signatureOwnerTitle !== undefined)
      update.signatureOwnerTitle = body.signatureOwnerTitle
    if (body.defaultTaxPercent !== undefined)
      update.defaultTaxPercent = Number(body.defaultTaxPercent)

    const updated = await BusinessProfile.findByIdAndUpdate(id, update, {
      new: true,
      runValidators: true
    });

    return res.status(200).json({
      success: true,
      data: updated,
      message: "Profile updated."
    })

  } catch (err) {
    console.error('UpdateBusinessProfile ERROR: ', err)
    return res.status(500).json({
      success: false,
      message: 'Server Error',
    })
  }
}

// GET MY BUSINESS PROFILE
export async function getMyBusinessProfile(req, res) {
  try {
    const { userId } = getAuth(req) || {}
    if (!userId) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required.',
      })
    }

    const profile = await BusinessProfile.findOne({owner: userId}).lean();

    if (!profile) {
      return res.status(204).json({
        success: true,
        message: 'No profile found.',
      })
    }

    return res.status(200).json({
      success: true,
      data: profile,
    })

  } catch (err) {
    console.error('GetMyBusinessProfile ERROR: ', err)
    return res.status(500).json({
      success: false,
      message: 'Server Error',
    })
  }
}
